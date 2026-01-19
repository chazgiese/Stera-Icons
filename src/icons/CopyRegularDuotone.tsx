import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CopyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CopyRegularDuotone = memo(
  forwardRef<SVGSVGElement, CopyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="copy-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.4 7.25q1.44-.01 2.36.05c.63.05 1.17.16 1.67.41.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.92.05 2.36v1.8q.01 1.44-.05 2.36a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.92.06-2.36.05H8.6q-1.44.01-2.36-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.06-.92-.05-2.36v-1.8q-.01-1.44.05-2.36.05-.93.41-1.67c.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.93-.06 2.36-.05zm-1.8 1.5c-1 0-1.7 0-2.24.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2a3 3 0 0 0-.26 1.11c-.04.55-.04 1.25-.04 2.24v1.8c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h1.8c1 0 1.7 0 2.24-.04a3 3 0 0 0 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24v-1.8c0-1 0-1.7-.04-2.24a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04z" clipRule="evenodd" />
        <path fill="currentColor" d="M15.4 2.25q1.44-.01 2.36.05.93.06 1.67.41c.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.92.05 2.36V11c0 1.33.01 2.2-.24 2.9a4.3 4.3 0 0 1-2.6 2.61c-.58.2-1.24.23-2.17.24l.01-1.35v-.15a5 5 0 0 0 1.66-.15c.79-.28 1.4-.9 1.69-1.7.14-.4.15-.94.15-2.4V8.6c0-1 0-1.7-.04-2.24a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04H13c-1.46 0-2 .01-2.4.15-.8.28-1.42.9-1.7 1.7-.11.32-.14.74-.15 1.65h-1.5c0-.92.04-1.58.24-2.15a4.3 4.3 0 0 1 2.6-2.61c.72-.25 1.58-.24 2.91-.24z" opacity={.4} />
    </IconBase>
  ))
);

CopyRegularDuotone.displayName = 'CopyRegularDuotone';

// Triple export pattern (lucide-react style)
export { CopyRegularDuotone, CopyRegularDuotone as CopyRegularDuotoneIcon, CopyRegularDuotone as SiCopyRegularDuotone };
export type { CopyRegularDuotoneProps };
