'use client';
import { LanguagesSupported, LanguagesSupportedMap, useLanguageStore, useSubscriptionStore } from "@/store/store"
import { usePathname } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import LoadingSpinner from "./LoadingSpinner";
import Link from "next/link";

function LanguageSelect() {
    const [language, setLanguage, getLanguages, getNotSupportedLanguages] =
        useLanguageStore((state) => [
            state.language,
            state.setLanguage,
            state.getLanguages,
            state.getNotSupportedLanguages,
        ]);
    const subsciption = useSubscriptionStore((state) => state.subscription);
    // const isPro = subsciption?.role === "pro" && subsciption?.status === "active";

    const pathName = usePathname();
    const isChatPage = pathName.includes("/chat");

    return (
        isChatPage && (
            <div>
                <Select
                    onValueChange={(value: LanguagesSupported) => setLanguage(value)}
                >
                    <SelectTrigger className="w-[150px] text-black dark:text-white">
                        <SelectValue
                            placeholder={LanguagesSupportedMap[language]}
                            className=""
                        />
                    </SelectTrigger>

                    <SelectContent>
                        {subsciption === undefined ? (
                            <LoadingSpinner />
                        ) : (
                            <>
                                {getLanguages(true).map((language) => (
                                    <SelectItem key={language} value={language}>
                                        {LanguagesSupportedMap[language]}
                                    </SelectItem>
                                ))}
                                {/* {getNotSupportedLanguages(false).map((language) => (
                                    <Link href={"/register"} key={language} prefetch={false}>
                                        <SelectItem
                                            key={language}
                                            value={language}
                                            disabled
                                            className="bg-gray-300/50 text-gray-500 dark:text-white py-2 my-1"
                                        >
                                            {LanguagesSupportedMap[language]} (Pro)
                                        </SelectItem>
                                    </Link>
                                ))} */}
                            </>
                        )}
                    </SelectContent>
                </Select>
            </div>
        )
    );
}

export default LanguageSelect