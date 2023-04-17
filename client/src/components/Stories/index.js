import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styles from "@/components/Stories/Styles.module.css"

export default function Stories() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Avatar className={styles.activeStory}   sx={{ width: 80, height: 80 }} alt="Remy Sharp" src="assets/profile-pic.jpg" />
        <Avatar className={styles.activeStory}   sx={{ width: 80, height: 80 }} alt="Travis Howard" src="assets/profile-pic.jpg" />
        <Avatar    sx={{ width: 80, height: 80 }} alt="Cindy Baker" src="assets/profile-pic.jpg" />
      </Stack>
    </>
  );
}
