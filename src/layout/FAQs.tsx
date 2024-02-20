import React from 'react'



const FAQs:React.FC = () => {
  return (
    <div style={{border: "1px solid red"}}>
        <div>
            <h1>FAQs</h1>
            <div>
            <h2>What is Paydestal?</h2>
            <p>
                Paydestal is a payment gateway that allows businesses to accept
                payments from customers. We provide a simple, secure and reliable
                way for businesses to collect payments from their customers.
            </p>
            <h2>How does Paydestal work?</h2>
            <p>
                Paydestal provides businesses with a unique link that they can share
                with their customers. When a customer clicks on the link, they are
                taken to a secure payment page where they can enter their payment
                details and complete the transaction.
            </p>
            <h2>What payment methods does Paydestal support?</h2>
            <p>
                Paydestal supports a wide range of payment methods, including card
                payments, USSD payments, and bank transfers. We are constantly
                adding new payment methods to make it as easy as possible for
                businesses to collect payments from their customers.
            </p>
            <h2>How much does Paydestal cost?</h2>
            <p>
                Paydestal is free to use for businesses. We charge a small fee for
                each transaction, which is deducted from the amount paid by the
                customer. There are no setup fees or monthly fees, so you only pay
                for the transactions you process.
            </p>
            <h2>How do I get started with Paydestal?</h2>
            <p>
                Getting started with Paydestal is easy. Simply sign up for an
                account on our website, and you will be able to start accepting
                payments from your customers right away. If you have any questions or
                need help getting set up, our support team is always available to
                assist you.
            </p>
            </div>
        </div>
    </div>
  )
}

export default FAQs