variable "aws_region"      { type = string }

variable "instance_type" {
  type    = string
  default = "t3.small"
}

variable "ami"             { type = string }

variable "ebs_size" {
  type    = number
  default = 20
}

variable "mongo_root_user" { type = string }
variable "mongo_root_pass" { type = string }
variable "ssh_key_name"    { type = string }
variable "vpc_id"          { type = string }
variable "subnet_id"       { type = string }
variable "auth_sg_id"      { type = string }

variable "availability_zone" {
  type = string
}

variable "existing_volume_id" {
  type = string
}

variable "existing_sg_id" {
  type = string
}