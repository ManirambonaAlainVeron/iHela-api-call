export interface I_Bill_init{
    redirect_uri: string | null;
    user: string;
    merchant_reference: string;
    description: string;
    amount: number;
}