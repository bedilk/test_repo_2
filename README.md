# depfix Stripe fixture

Run from the dependency_check repository:

```bash
depfix scan --path ../test_repo_2 --provider stripe --no-save
depfix fix --path ../test_repo_2 --provider stripe \
  --change-file ../test_repo_2/changes/stripe-charges-to-payment-intents.json --llm-provider ollama
depfix fix --path ../test_repo_2 --provider stripe \
  --change-file ../test_repo_2/changes/stripe-sources-to-payment-methods.json --llm-provider ollama
```
