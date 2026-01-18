import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EyeBoldProps = Omit<IconBaseProps, 'children'>;

const EyeBold = memo(
  forwardRef<SVGSVGElement, EyeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4c4.92 0 9.1 3.17 10.93 7.62a1 1 0 0 1 0 .76C21.1 16.83 16.93 20 12 20s-9.1-3.17-10.93-7.62a1 1 0 0 1 0-.76C2.9 7.17 7.07 4 12 4m0 2a9.9 9.9 0 0 0-8.91 6A9.9 9.9 0 0 0 12 18a9.9 9.9 0 0 0 8.91-6A9.9 9.9 0 0 0 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

EyeBold.displayName = 'EyeBold';

// Triple export pattern (lucide-react style)
export { EyeBold, EyeBold as EyeBoldIcon, EyeBold as SiEyeBold };
export type { EyeBoldProps };
