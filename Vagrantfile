# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.define :torMachine do |torMachine|
    torMachine.vm.box = "debian/stretch64"
    torMachine.vm.hostname = "torMachine"
    torMachine.vm.network "private_network", ip: "172.9.5.30"
    torMachine.vm.synced_folder ".", "/vagrant", type: "nfs", nfs_version: "3"

    torMachine.vm.provision "shell", path: "install-vagrant.sh"
    torMachine.vm.provider "libvirt" do |libvirt|
      libvirt.memory = 6144
      libvirt.cpus = 2
      libvirt.driver = "kvm"
    end

    torMachine.vm.provider "virtualbox" do |v|
      v.memory = 6144
      v.cpus = 2
    end
  end
end
