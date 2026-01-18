import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PoundSterlingCircleFillProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleFill = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m4.28 6.96a4.4 4.4 0 0 0-4.35-2.17C10.4 6.01 9 7.18 9 9.04v1.75H8a1 1 0 0 0 0 2h1v1.76c0 .19-.16.48-.6.82a4 4 0 0 1-.78.45l-.08.04A1 1 0 0 0 8 17.75h8a1 1 0 1 0 0-2h-5.31q.29-.52.31-1.2v-1.76h2.14a1 1 0 0 0 0-2H11V9.04c0-.67.46-1.16 1.21-1.27.75-.1 1.72.2 2.37 1.25a1 1 0 0 0 1.7-1.06" clipRule="evenodd" />
    </IconBase>
  ))
);

PoundSterlingCircleFill.displayName = 'PoundSterlingCircleFill';

// Triple export pattern (lucide-react style)
export { PoundSterlingCircleFill, PoundSterlingCircleFill as PoundSterlingCircleFillIcon, PoundSterlingCircleFill as SiPoundSterlingCircleFill };
export type { PoundSterlingCircleFillProps };
