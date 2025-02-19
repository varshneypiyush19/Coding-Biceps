exports.meetingConfirmationEmail = (name, amount, orderId, paymentId, selectedDate, selectedTime, selectedTimezone) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Meeting Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.6;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
                border: 1px solid #ddd;
                border-radius: 10px;
                box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
            }
    
            .logo {
                max-width: 150px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
                color: #2c3e50;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
                text-align: left;
            }
    
            .highlight {
                font-weight: bold;
                color: #e74c3c;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #3498db;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <a href="https://yourwebsite.com"><img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png"
                    alt="Company Logo"></a>
            <div class="message">Your Meeting is Confirmed!</div>
            <div class="body">
                <p>Dear <span class="highlight">${name}</span>,</p>
                <p>We are pleased to inform you that your payment of <span class="highlight">₹${amount}</span> has been successfully received.</p>
                <p><strong>Order ID:</strong> ${orderId}</p>
                <p><strong>Payment ID:</strong> ${paymentId}</p>
                <p>Your meeting is scheduled for:</p>
                <p><strong>Date:</strong> ${selectedDate}</p>
                <p><strong>Time:</strong> ${selectedTime} (${selectedTimezone})</p>
                <p>We look forward to connecting with you!</p>
                <a class="cta" href="https://yourwebsite.com/dashboard">View Your Booking</a>
            </div>
            <div class="support">
                If you have any questions, feel free to reach out at 
                <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a>.
            </div>
        </div>
    </body>
    
    </html>`;
};
