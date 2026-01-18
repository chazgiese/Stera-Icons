import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubeFillProps = Omit<IconBaseProps, 'children'>;

const CubeFill = memo(
  forwardRef<SVGSVGElement, CubeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.2 1.51a4 4 0 0 1 1.6 0c.64.13 1.22.47 2.02.91l4.2 2.33c.83.47 1.46.8 1.92 1.3a4 4 0 0 1 .86 1.46c.21.65.2 1.36.2 2.31v4.36c0 .95.01 1.66-.2 2.3a4 4 0 0 1-.86 1.47c-.46.5-1.09.83-1.92 1.3l-4.2 2.33c-.8.44-1.38.78-2.01.9a4 4 0 0 1-1.62 0c-.63-.12-1.21-.46-2-.9l-4.2-2.33c-.85-.47-1.47-.8-1.93-1.3a4 4 0 0 1-.86-1.46C2 15.84 2 15.13 2 14.18V9.82c0-.95-.01-1.66.2-2.3a4 4 0 0 1 .86-1.47c.46-.5 1.08-.83 1.92-1.3l4.2-2.33c.8-.44 1.38-.78 2.01-.9M13 12.6v7.7l.85-.46 4.2-2.33a6 6 0 0 0 1.42-.91 2 2 0 0 0 .43-.73c.09-.27.1-.59.1-1.68V9.82c0-.52 0-.86-.02-1.11zm-.6-9.12a2 2 0 0 0-.8 0c-.27.06-.54.2-1.45.7L5.95 6.5l-.88.5L12 10.87 18.93 7q-.3-.19-.88-.5l-4.2-2.34c-.91-.5-1.18-.64-1.45-.7" clipRule="evenodd" />
    </IconBase>
  ))
);

CubeFill.displayName = 'CubeFill';

export { CubeFill };
export type { CubeFillProps };
