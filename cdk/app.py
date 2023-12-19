#!/usr/bin/env python3

import aws_cdk as cdk
#from aws_cdk import core

from cdk.cdk_stack import CdkStack

app = cdk.App()
#app = core.App()
CdkStack(app, "poke-cdk", env={'region': 'us-east-1'})

app.synth()

