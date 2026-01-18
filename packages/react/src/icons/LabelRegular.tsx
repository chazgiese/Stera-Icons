import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LabelRegularProps = Omit<IconBaseProps, 'children'>;

const LabelRegular = memo(
  forwardRef<SVGSVGElement, LabelRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H8.22a4.8 4.8 0 0 1-4.03-2.23l-3.16-5.06a2.8 2.8 0 0 1 0-2.92l3.16-5.06a4.8 4.8 0 0 1 4.03-2.23zm-9.78 1.5c-1.12 0-2.16.58-2.76 1.53L2.3 11.34c-.25.4-.25.92 0 1.32l3.16 5.06c.6.95 1.64 1.53 2.76 1.53H18c1.8 0 3.25-1.46 3.25-3.25V8c0-1.8-1.45-3.25-3.25-3.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelRegular.displayName = 'LabelRegular';

export { LabelRegular };
export type { LabelRegularProps };
