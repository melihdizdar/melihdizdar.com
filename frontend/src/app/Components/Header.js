import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../components/ui/sheet"

export default function Header() {
    return (
        <header className='flex items-center justify-between py-15 px-20 bg-dark'>
            <div className='text-white text-24 font-700'>MD.</div>
            <div className='text-white text-24 font-700'>
                <Sheet>
                    <SheetTrigger asChild>
                        <div>open</div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save whenre done.
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}