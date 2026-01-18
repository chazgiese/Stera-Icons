import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlayRegularProps = Omit<IconBaseProps, 'children'>;

const PlayRegular = memo(
  forwardRef<SVGSVGElement, PlayRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.6 1.44c.68-.07 1.37.14 2.12.48q1.1.53 2.83 1.53l6.53 3.73c1.18.68 2.11 1.2 2.8 1.69a4 4 0 0 1 1.5 1.6c.43.97.43 2.09 0 3.06a4 4 0 0 1-1.5 1.6c-.69.48-1.62 1.01-2.8 1.69l-6.53 3.73q-1.72 1-2.83 1.53c-.75.34-1.44.55-2.12.48a3.8 3.8 0 0 1-2.64-1.53 4 4 0 0 1-.64-2.08q-.09-1.22-.07-3.22V8.27q-.02-2 .07-3.22a4 4 0 0 1 .64-2.08A3.8 3.8 0 0 1 5.6 1.44m.16 1.5c-.63.06-1.2.4-1.58.9-.17.24-.3.6-.36 1.35-.07.73-.07 1.7-.07 3.08v7.46c0 1.37 0 2.35.07 3.08.07.74.2 1.11.36 1.34.37.52.95.85 1.58.92.28.03.66-.05 1.34-.35.67-.31 1.52-.8 2.71-1.48l6.53-3.72c1.2-.7 2.06-1.19 2.68-1.62.61-.43.87-.72.99-.98.26-.59.26-1.25 0-1.84-.12-.26-.38-.55-1-.99a39 39 0 0 0-2.68-1.6L9.82 4.74A38 38 0 0 0 7.1 3.28c-.68-.3-1.06-.38-1.34-.35" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayRegular.displayName = 'PlayRegular';

// Triple export pattern (lucide-react style)
export { PlayRegular, PlayRegular as PlayRegularIcon, PlayRegular as SiPlayRegular };
export type { PlayRegularProps };
