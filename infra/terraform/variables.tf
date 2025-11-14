variable "region" {
  type    = string
  default = "us-east-1"
}

variable "az" {
  type    = string
  default = "us-east-1a"
}

variable "ubuntu_ami" {
  description = "Ubuntu 22.04 LTS AMI ID for your region"
  default     = "ami-0885b1f6bd170450c" # <-- replace with latest Ubuntu AMI in your region
}

variable "my_ip" {
  type    = string
  default = "156.202.63.79/32"
}
