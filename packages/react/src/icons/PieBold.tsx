import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PieBoldProps = Omit<IconBaseProps, 'children'>;

const PieBold = memo(
  forwardRef<SVGSVGElement, PieBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.3 7.54a1 1 0 0 1 1.4 1.42l-1 1a1 1 0 0 1-1.4-1.42zM13.3 7.54a1 1 0 0 1 1.4 0l1 1a1 1 0 0 1-1.4 1.42l-1-1a1 1 0 0 1 0-1.42" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4c5.06 0 9.3 2.86 10.73 6.95.22.64.3 1.48-.14 2.24a3.6 3.6 0 0 1-2.05 1.65l-.05.17-1.07 3A3 3 0 0 1 16.59 20H7.41a3 3 0 0 1-2.83-2l-1.07-3-.05-.16a3.6 3.6 0 0 1-2.05-1.65 2.7 2.7 0 0 1-.14-2.24C2.71 6.86 6.94 4 12 4m5 9.96a3.5 3.5 0 0 1-5 0 3.5 3.5 0 0 1-5 0q-.6.6-1.43.87l.9 2.5a1 1 0 0 0 .94.67h9.18a1 1 0 0 0 .94-.66l.9-2.51a3.6 3.6 0 0 1-1.43-.87M12 6c-4.33 0-7.73 2.43-8.84 5.61-.1.3-.07.5-.01.58A1.6 1.6 0 0 0 4.5 13c.71 0 1.35-.5 1.53-1.24l.06-.16a1 1 0 0 1 1.88.16A1.6 1.6 0 0 0 9.5 13c.71 0 1.35-.5 1.53-1.24l.06-.16a1 1 0 0 1 1.88.16A1.6 1.6 0 0 0 14.5 13c.71 0 1.35-.5 1.53-1.24l.06-.16a1 1 0 0 1 1.88.16A1.6 1.6 0 0 0 19.6 13c.52-.04.99-.34 1.25-.8.06-.1.1-.3 0-.59C19.72 8.43 16.32 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

PieBold.displayName = 'PieBold';

// Triple export pattern (lucide-react style)
export { PieBold, PieBold as PieBoldIcon, PieBold as SiPieBold };
export type { PieBoldProps };
