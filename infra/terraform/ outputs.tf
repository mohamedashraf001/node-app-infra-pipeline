# Output
output "instance_public_ip" {
  value = aws_instance.backend_server.public_ip
}
