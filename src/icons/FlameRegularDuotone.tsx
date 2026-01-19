import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlameRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlameRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlameRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flame-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="m12 1.25.11.01h.02l.06.02a1 1 0 0 1 .25.12l.03.02.03.02.07.06a22 22 0 0 1 1.19 1.05c.76.71 1.78 1.71 2.8 2.9a23 23 0 0 1 2.85 4c.78 1.44 1.34 3 1.34 4.55a8.75 8.75 0 1 1-17.5 0c0-1.55.56-3.11 1.34-4.55a23 23 0 0 1 2.84-4 37 37 0 0 1 4-3.95l.07-.06.02-.02.04-.02.05-.04.06-.03.14-.05.06-.02h.01zm-.74 2.4c-.74.68-1.72 1.65-2.7 2.78a22 22 0 0 0-2.65 3.73A8 8 0 0 0 4.75 14a7.25 7.25 0 1 0 14.5 0 8 8 0 0 0-1.16-3.84 22 22 0 0 0-2.66-3.73A36 36 0 0 0 12 2.99z" clipRule="evenodd" />
        <path fill="currentColor" d="M11.51 11.93c.28-.24.7-.24.98 0l.01.01.04.03.54.52c.34.34.8.83 1.26 1.42.9 1.16 1.91 2.83 1.91 4.59q-.01.87-.26 1.55a7 7 0 0 1-3.99 1.2c.6 0 1.3-.2 1.84-.64.51-.42.91-1.08.91-2.11 0-1.24-.74-2.57-1.6-3.66-.4-.54-.82-.98-1.13-1.3l-.02-.01-.02.02c-.3.3-.72.75-1.14 1.29-.85 1.1-1.59 2.42-1.59 3.66 0 1.03.4 1.69.91 2.1.54.45 1.24.65 1.84.65l-.37-.01A7 7 0 0 1 8 20.04a5 5 0 0 1-.25-1.54c0-1.76 1.01-3.43 1.9-4.59a16 16 0 0 1 1.81-1.94l.04-.03z" opacity={.4} />
    </IconBase>
  ))
);

FlameRegularDuotone.displayName = 'FlameRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlameRegularDuotone, FlameRegularDuotone as FlameRegularDuotoneIcon, FlameRegularDuotone as SiFlameRegularDuotone };
export default FlameRegularDuotone;
export type { FlameRegularDuotoneProps };
