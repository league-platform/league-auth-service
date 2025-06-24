provider "aws" { region = var.aws_region }

# 1) EBS volume
resource "aws_ebs_volume" "mongo_data" {
  availability_zone = data.aws_subnet.selected.availability_zone
  size              = var.ebs_size
  tags = { Name = "mongo-data-qa" }
}

# 2) Attach volume to the instance (created below)
resource "aws_volume_attachment" "mongo_attach" {
  device_name = "/dev/xvdf"
  volume_id   = aws_ebs_volume.mongo_data.id
  instance_id = aws_instance.mongo.id
}

# 3) Security Group allowing only your auth-service SG to talk on 27017
resource "aws_security_group" "mongo_sg" {
  name        = "qa-mongo-sg"
  description = "Allow auth-service to access Mongo"
  vpc_id      = var.vpc_id

  ingress {
    from_port       = 27017
    to_port         = 27017
    protocol        = "tcp"
    security_groups = [var.auth_sg_id]
  }
  egress { from_port = 0; to_port = 0; protocol = "-1"; cidr_blocks = ["0.0.0.0/0"] }
}

