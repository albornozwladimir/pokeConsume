from constructs import Construct
from aws_cdk import (
    Stack,
    aws_s3 as s3,
    aws_s3_deployment as s3deploy,
)


class CdkStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        pokeBucket = s3.Bucket(self, id="pokebuck",
            website_index_document="index.html",
            public_read_access=True,
            block_public_access=s3.BlockPublicAccess.BLOCK_ACLS,
            access_control=s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL
        )

        s3deploy.BucketDeployment(self, id="pokebuckdep",
            sources=[s3deploy.Source.asset("../static_site/")],
            destination_bucket=pokeBucket)