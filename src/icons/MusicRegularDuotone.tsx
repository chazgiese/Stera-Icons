import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MusicRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MusicRegularDuotone = memo(
  forwardRef<SVGSVGElement, MusicRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="music-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.42 2.5a2 2 0 0 1 2.33 1.98v11.05a2.8 2.8 0 0 0-1.5-2.45v-5.2L8.75 9.65v7.89a2.8 2.8 0 0 0-1.5-2.45V6.06a2 2 0 0 1 1.67-1.97zm.25 1.48-9.5 1.59a.5.5 0 0 0-.42.49V8.1l10.5-1.75V4.48a.5.5 0 0 0-.58-.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.94 14.75a2.8 2.8 0 0 1 2.81 2.81 4.2 4.2 0 0 1-4.19 4.19 2.8 2.8 0 0 1-2.81-2.81 4.2 4.2 0 0 1 4.19-4.19m0 1.5a2.7 2.7 0 0 0-2.69 2.69c0 .72.59 1.31 1.31 1.31 1.49 0 2.69-1.2 2.69-2.69 0-.72-.59-1.31-1.31-1.31M17.94 12.75a2.8 2.8 0 0 1 2.81 2.81 4.2 4.2 0 0 1-4.19 4.19 2.8 2.8 0 0 1-2.81-2.81 4.2 4.2 0 0 1 4.19-4.19m0 1.5a2.7 2.7 0 0 0-2.69 2.69c0 .72.59 1.31 1.31 1.31 1.49 0 2.69-1.2 2.69-2.69 0-.72-.59-1.31-1.31-1.31" clipRule="evenodd" />
    </IconBase>
  ))
);

MusicRegularDuotone.displayName = 'MusicRegularDuotone';

// Triple export pattern (lucide-react style)
export { MusicRegularDuotone, MusicRegularDuotone as MusicRegularDuotoneIcon, MusicRegularDuotone as SiMusicRegularDuotone };
export default MusicRegularDuotone;
export type { MusicRegularDuotoneProps };
