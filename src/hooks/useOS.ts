import { useCallback, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

interface UseOS {
  isAndroid: boolean;
  isIOS: boolean;
  requestStoragePermissions: () => void;
}

/**
 * Exposing the OS platform
 */
export function useOS(): UseOS {
  const [isAndroid] = useState(Platform.OS === 'android');
  const [isIOS] = useState(Platform.OS === 'ios');

  const requestStoragePermissions = useCallback(async () => {
    if (isAndroid) {
      try {
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
      } catch (e) {
        console.error('Storage permission failure');
      }
    }
  }, [isAndroid]);

  return { isAndroid, isIOS, requestStoragePermissions };
}
