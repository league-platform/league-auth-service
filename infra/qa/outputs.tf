output "service_url" {
  description = "URL of the QA load balancer"
  value       = module.qa_{{service-name}}.lb_dns_name
}
