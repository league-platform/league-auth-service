provider "aws" {
  region = var.aws_region
}

terraform {
  backend "local" {}
}

# 1) EBS volume
resource "aws_ebs_volume" "mongo_data" {
  availability_zone = var.availability_zone
  size              = var.ebs_size
  tags = { Name = "mongo-data-qa" }
}

# 2) EC2 instance for MongoDB
resource "aws_instance" "mongo" {
  ami                         = var.ami
  instance_type               = var.instance_type
  subnet_id                   = var.subnet_id
  key_name                    = var.ssh_key_name
  vpc_security_group_ids      = [aws_security_group.mongo_sg.id]
  associate_public_ip_address = false

  user_data = <<-EOF
    #!/bin/bash
    # …tu script…
  EOF

  tags = { Name = "qa-mongo" }
}

# 3) Attach the EBS volume to the instance
resource "aws_volume_attachment" "mongo_attach" {
  device_name = "/dev/xvdf"
  volume_id   = aws_ebs_volume.mongo_data.id
  instance_id = aws_instance.mongo.id
}

# 4) Security group…
resource "aws_security_group" "mongo_sg" {
  # …
}

# 5) Output Mongo URI
output "mongo_uri" {
  value = "mongodb://${var.mongo_root_user}:${var.mongo_root_pass}@${aws_instance.mongo.private_ip}:27017/league-auth?authSource=admin"
}
