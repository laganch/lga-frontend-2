export interface PaymentInfo {
    entityId: string;
    entityName: string;
    feeDescription: string;
    returnBackUrl: string;
    totalAmount: string;
    paymentDetails?: any;
}