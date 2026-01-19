import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WifiRegularProps = Omit<IconBaseProps, 'children'>;

const WifiRegular = memo(
  forwardRef<SVGSVGElement, WifiRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wifi" {...props}>
      <path fill="currentColor" d="M12 14.5q1.52.02 2.73.77c.34.21.43.76.02 1.18l-1.67 1.73c-.6.6-1.57.6-2.16 0l-1.67-1.73c-.4-.42-.32-.96.02-1.18q1.21-.75 2.73-.77M12 9.5c2.48 0 4.76.91 6.53 2.43.17.15.2.44 0 .64l-.67.69c-.19.19-.54.22-.81 0a8.1 8.1 0 0 0-10.1 0c-.27.22-.62.19-.8 0l-.68-.69c-.2-.2-.17-.49 0-.64A10 10 0 0 1 12 9.5" />
        <path fill="currentColor" d="M12 4.5c3.82 0 7.3 1.46 9.96 3.88.18.16.2.45 0 .66l-.66.68c-.2.2-.54.22-.78 0a12.9 12.9 0 0 0-17.04 0c-.24.22-.59.2-.78 0l-.66-.68a.45.45 0 0 1 0-.66A14.8 14.8 0 0 1 12 4.5" />
    </IconBase>
  ))
);

WifiRegular.displayName = 'WifiRegular';

// Triple export pattern (lucide-react style)
export { WifiRegular, WifiRegular as WifiRegularIcon, WifiRegular as SiWifiRegular };
export default WifiRegular;
export type { WifiRegularProps };
