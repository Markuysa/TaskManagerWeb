deploy:
		docker buildx build \
						  --push \
						  --platform linux/amd64/v2 \
						  --tag markuysa/tasky-front:latest .