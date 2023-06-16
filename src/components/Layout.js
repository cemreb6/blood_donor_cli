import { Stack } from "@mui/material";
import CustomAppbar from "./Appbar";

export default function Layout({ children }) {
    return (
        <>
            <CustomAppbar />
            <Stack direction="column" spacing={2} ml={15} mr={15} mt={10} alignItems="stretch">
                {children}
            </Stack>
        </>
    );
}