import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PieBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PieBoldDuotone = memo(
  forwardRef<SVGSVGElement, PieBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pie-bold-duotone" {...props}>
      <path d="M9.3 7.54a1 1 0 1 1 1.4 1.42l-1 1a1 1 0 0 1-1.4-1.42zM13.3 7.54a1 1 0 0 1 1.4 0l1 1a1 1 0 1 1-1.4 1.42l-1-1a1 1 0 0 1 0-1.42M6.47 17.34a1 1 0 0 0 .94.66h9.18a1 1 0 0 0 .94-.66l.9-2.5a3.5 3.5 0 0 0 2.12 0L19.42 18A3 3 0 0 1 16.59 20H7.41a3 3 0 0 1-2.83-2l-1.13-3.16a3.5 3.5 0 0 0 2.12 0z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 4c5.06 0 9.3 2.86 10.73 6.95.22.64.3 1.48-.14 2.24A3.6 3.6 0 0 1 19.5 15c-.98 0-1.86-.4-2.5-1.05a3.5 3.5 0 0 1-5 0 3.5 3.5 0 0 1-5 0 3.52 3.52 0 0 1-5.59-.76 2.7 2.7 0 0 1-.14-2.24C2.71 6.86 6.94 4 12 4m0 2c-4.33 0-7.73 2.43-8.84 5.61-.1.3-.07.5-.01.58A1.6 1.6 0 0 0 4.5 13c.71 0 1.35-.5 1.53-1.24a1 1 0 0 1 1.94 0A1.6 1.6 0 0 0 9.5 13c.71 0 1.35-.5 1.53-1.24a1 1 0 0 1 1.94 0A1.6 1.6 0 0 0 14.5 13c.71 0 1.35-.5 1.53-1.24a1 1 0 0 1 1.94 0 1.6 1.6 0 0 0 1.7 1.23c.5-.06.93-.35 1.18-.8.06-.09.1-.29 0-.58C19.72 8.43 16.32 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

PieBoldDuotone.displayName = 'PieBoldDuotone';

// Triple export pattern (lucide-react style)
export { PieBoldDuotone, PieBoldDuotone as PieBoldDuotoneIcon, PieBoldDuotone as SiPieBoldDuotone };
export type { PieBoldDuotoneProps };
