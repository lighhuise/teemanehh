<x-mail::message>
# New Contact Form Submission

You have received a new message from the contact form on Teemane Heavy Haulage.

**Name:** {{ $data['name'] }}  
**Email:** {{ $data['email'] }}  
**Phone:** {{ $data['phone'] ?? 'Not provided' }}  

**Message:**
{{ $data['message'] }}

<x-mail::button :url="config('app.url')">
Visit Website
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
