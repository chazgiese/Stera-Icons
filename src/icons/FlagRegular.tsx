import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlagRegularProps = Omit<IconBaseProps, 'children'>;

const FlagRegular = memo(
  forwardRef<SVGSVGElement, FlagRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flag" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.82 2.29c1.67-.15 2.86-.06 3.82.18.95.24 1.64.61 2.27.94s1.22.63 2.09.84 2.06.32 3.85.2c1-.05 1.9.72 1.9 1.77v7.92c0 .89-.68 1.66-1.6 1.73-2.02.15-3.44.04-4.54-.22-1.1-.27-1.86-.68-2.53-1.03a7 7 0 0 0-2.09-.83c-.75-.15-1.76-.21-3.24-.07V21a.75.75 0 0 1-1.5 0V4c0-.87.66-1.64 1.57-1.72m3.46 1.63c-.76-.18-1.77-.27-3.33-.14-.1.01-.2.1-.2.23v8.2c1.51-.13 2.63-.07 3.54.11 1.08.22 1.82.61 2.5.97.66.36 1.27.68 2.17.9s2.16.33 4.08.18c.11 0 .21-.1.21-.23V6.22c0-.13-.13-.28-.31-.26-1.89.11-3.23 0-4.28-.25a10 10 0 0 1-2.45-.97c-.64-.34-1.18-.63-1.93-.82" clipRule="evenodd" />
    </IconBase>
  ))
);

FlagRegular.displayName = 'FlagRegular';

// Triple export pattern (lucide-react style)
export { FlagRegular, FlagRegular as FlagRegularIcon, FlagRegular as SiFlagRegular };
export default FlagRegular;
export type { FlagRegularProps };
