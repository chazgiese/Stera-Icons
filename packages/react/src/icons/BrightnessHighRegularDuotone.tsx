import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrightnessHighRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrightnessHighRegularDuotone = memo(
  forwardRef<SVGSVGElement, BrightnessHighRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.75c.4 0 .75.34.75.75V22a.75.75 0 0 1-1.5 0v-2.5c0-.41.33-.75.75-.75M6.16 16.77a.75.75 0 0 1 1.06 1.06L5.46 19.6a.75.75 0 0 1-1.06-1.06zM16.78 16.77c.29-.3.76-.3 1.06 0l1.77 1.77a.75.75 0 0 1-1.07 1.06l-1.76-1.77a.75.75 0 0 1 0-1.06M4.5 11.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5zM4.4 4.4c.3-.3.77-.3 1.06 0l1.77 1.76a.75.75 0 0 1-1.06 1.06L4.4 5.46a.75.75 0 0 1 0-1.07M18.54 4.4a.75.75 0 1 1 1.06 1.06l-1.77 1.76a.75.75 0 0 1-1.06-1.06zM12 1.25c.4 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0V2c0-.41.33-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BrightnessHighRegularDuotone.displayName = 'BrightnessHighRegularDuotone';

export { BrightnessHighRegularDuotone };
export type { BrightnessHighRegularDuotoneProps };
