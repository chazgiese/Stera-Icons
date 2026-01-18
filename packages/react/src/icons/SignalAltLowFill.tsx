import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignalAltLowFillProps = Omit<IconBaseProps, 'children'>;

const SignalAltLowFill = memo(
  forwardRef<SVGSVGElement, SignalAltLowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5 14.75c1.24 0 2.25 1 2.25 2.25v2c0 1.24-1 2.25-2.25 2.25H4c-1.24 0-2.25-1-2.25-2.25v-2c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

SignalAltLowFill.displayName = 'SignalAltLowFill';

export { SignalAltLowFill };
export type { SignalAltLowFillProps };
