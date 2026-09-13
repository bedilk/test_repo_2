# depfix Stripe fixture

This fixture contains a legacy `stripe.charges.create` call and a local SDK
shim. Its test suite runs without Stripe credentials or a network download.

```bash
cd /Users/bedil_karimov/Documents/dependency_check
depfix scan --path ../test_repo_2 --provider stripe --no-save
depfix fix --path ../test_repo_2 --provider stripe \
  --change-file ../test_repo_2/changes/stripe-charges-to-payment-intents.json \
  --llm-provider ollama
```
