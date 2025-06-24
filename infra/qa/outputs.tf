output "service_url" {
  description = "URL of the QA load balancer"
  value       = module.qa_mongo.lb_dns_name
}