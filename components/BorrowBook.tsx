"use client";

import Image from 'next/image'
import { Button } from './ui/button'
import { borrowBook } from '@/lib/admin/actions/book.action'
import { toast } from 'sonner'
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import BorrowRecord from '@/database/Models/borrowRecords';

const BorrowBook = ({ userId, bookId, hasBorrowed }: { userId: string, bookId: string, hasBorrowed: boolean }) => {
    const [borrowing, setBorrowing] = useState(false)
    const [borrowed, setBorrowed] = useState(hasBorrowed)


    const handleBorroBook = async () => {
        try {
            setBorrowing(true)
            const result = await borrowBook({ userId, bookId });
            if (result.success) {
                setBorrowed(true)
                toast.success('Book borrowed successfully')
            } else {
                toast.error(result.error)
                setBorrowed(false)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setBorrowing(false)
        }
    }


    return (
        <Button className='book-overview_btn' onClick={handleBorroBook} disabled={borrowing || borrowed}>
            <Image src="/icons/book.svg" alt="star" width={20} height={20} />
            <p className='font-bebas-neue text-xl text-dark-100'>
                {borrowed ? "Borrowed" : borrowing ? <LoaderCircle className='animate-spin' size={18} /> : "Borrow"}
            </p>
        </Button>
    )
}

export default BorrowBook
