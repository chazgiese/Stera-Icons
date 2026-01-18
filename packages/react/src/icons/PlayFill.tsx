import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlayFillProps = Omit<IconBaseProps, 'children'>;

const PlayFill = memo(
  forwardRef<SVGSVGElement, PlayFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.57 1.2c.76-.09 1.5.15 2.25.5q1.13.52 2.86 1.54l6.52 3.72q1.77 1 2.82 1.7c.69.48 1.27 1 1.58 1.7a4 4 0 0 1 0 3.27c-.3.7-.9 1.23-1.58 1.7-.7.5-1.64 1.03-2.82 1.7l-6.52 3.73-1.58.9q-.7.4-1.28.65c-.76.35-1.5.58-2.25.5a4 4 0 0 1-2.8-1.63 4.3 4.3 0 0 1-.7-2.2q-.09-1.25-.07-3.25V8.27c0-1.34 0-2.41.08-3.24s.23-1.6.68-2.2a4 4 0 0 1 2.8-1.64" />
    </IconBase>
  ))
);

PlayFill.displayName = 'PlayFill';

// Triple export pattern (lucide-react style)
export { PlayFill, PlayFill as PlayFillIcon, PlayFill as SiPlayFill };
export type { PlayFillProps };
