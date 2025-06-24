provider "aws" {
  region = var.aws_region
}

terraform {
  backend "local" {}
}

EC2 instance for MongoDB
resource "aws_instance" "mongo" {
  ami                         = var.ami
  instance_type               = var.instance_type
  subnet_id                   = var.subnet_id
  key_name                    = var.ssh_key_name
  vpc_security_group_ids      = [var.existing_sg_id]
  associate_public_ip_address = false

  user_data = <<-EOF
    #!/bin/bash
    # …tu script…
  EOF

  tags = { Name = "qa-mongo" }
}

Attach the EBS volume to the instance
resource "aws_volume_attachment" "mongo_attach" {
  device_name = "/dev/xvdf"
  volume_id   = var.existing_volume_id
  instance_id = aws_instance.mongo.id
}


Output Mongo URI
output "mongo_uri" {
  value = "mongodb://${var.mongo_root_user}:${var.mongo_root_pass}@${aws_instance.mongo.private_ip}:27017/league-auth?authSource=admin"
}
