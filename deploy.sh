#!/bin/bash
set -e
yq eval ".spec.template.spec.containers[0].image = \"$1\"" deployment/deployment.yaml > deployment/deployment-merged.yaml
kubectl apply -f deployment/deployment-merged.yaml
kubectl apply -f deployment/service.yaml
kubectl apply -f deployment/ingress.yaml