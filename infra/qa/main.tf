provider "aws" {
  region = var.aws_region
}

module "qa_{{service-name}}" {
  source        = "git::ssh://git@github.com/league-platform/terraform-modules.git//asg-with-lb"
  name          = "{{repo-name}}"
  env           = "qa"
  image         = "yourdockerhubuser/{{repo-name}}:qa-${var.commit_sha}"
  port          = 3000
  vpc_id        = var.vpc_id
  subnet_ids    = var.private_subnets
}
