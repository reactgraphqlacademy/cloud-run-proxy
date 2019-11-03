# Commands

To deploy you need to run the following commands:

1. Create a new build

```
gcloud builds submit --tag gcr.io/GCP_PROJECT_ID/SERVICE_ID
```

2. To deploy a build

```
gcloud beta run deploy --image gcr.io/GCP_PROJECT_ID/SERVICE_ID --platform managed
```
