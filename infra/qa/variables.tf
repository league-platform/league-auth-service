variable "aws_region"    { type = string }
variable "vpc_id"        { type = string }
variable "private_subnets"{ type = list(string) }
variable "commit_sha"    { type = string }
