import { useTheme } from '@/contexts/ThemeContext';

export function useAppColorScheme() {
    const { theme } = useTheme();
    return theme;
}
