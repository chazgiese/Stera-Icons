import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MusicRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MusicRegularDuotone = memo(
  forwardRef<SVGSVGElement, MusicRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path stroke="currentColor" strokeWidth="1.5" d="M2.5 18.94c0-1.9 1.54-3.44 3.44-3.44 1.14 0 2.06.92 2.06 2.06C8 19.46 6.46 21 4.56 21a2.06 2.06 0 0 1-2.06-2.06ZM14.5 16.94c0-1.9 1.54-3.44 3.44-3.44 1.14 0 2.06.92 2.06 2.06 0 1.9-1.54 3.44-3.44 3.44a2.06 2.06 0 0 1-2.06-2.06Z" />
        <path fill="currentColor" fillRule="evenodd" d="M18.42 2.5a2 2 0 0 1 2.33 1.98v11.05a2.8 2.8 0 0 0-1.5-2.45v-5.2L8.75 9.65v7.89a2.8 2.8 0 0 0-1.5-2.45V6.06a2 2 0 0 1 1.67-1.97zm.25 1.48-9.5 1.59a.5.5 0 0 0-.42.49V8.1l10.5-1.75V4.48a.5.5 0 0 0-.58-.5" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

MusicRegularDuotone.displayName = 'MusicRegularDuotone';

// Triple export pattern (lucide-react style)
export { MusicRegularDuotone, MusicRegularDuotone as MusicRegularDuotoneIcon, MusicRegularDuotone as SiMusicRegularDuotone };
export type { MusicRegularDuotoneProps };
