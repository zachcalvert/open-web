from django.shortcuts import render


def stripe_webhook():
    event = None
    payload = request.data
    try:
        event = json.loads(payload)
    except Exception as e:
        print(f'Webhook error while parsing basic request: {e}')
        return Response({"success": False})

    if event and event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']  # contains a stripe.PaymentIntent
        print('Payment for {} succeeded'.format(payment_intent['amount']))
        # Then define and call a method to handle the successful payment intent.
        # handle_payment_intent_succeeded(payment_intent)
        print(vars(payment_intent))
    else:
        # Unexpected event type
        print('Unhandled event type {}'.format(event['type']))
    return Response({"success": True})