import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EditSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EditSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, EditSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11 2a1 1 0 1 1 0 2H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a1 1 0 1 1 2 0v3a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16.17 2.17a4 4 0 0 1 5.67 5.65l-8.12 8.33a1 1 0 0 1-.61.3l-5 .54A1 1 0 0 1 7 15.84l.76-4.78.04-.15a1 1 0 0 1 .23-.4l8.12-8.33zm4.24 1.42a2 2 0 0 0-2.82 0l-7.9 8.1-.5 3.17 3.34-.36 7.88-8.08a2 2 0 0 0 0-2.83" clipRule="evenodd" />
    </IconBase>
  ))
);

EditSquareBoldDuotone.displayName = 'EditSquareBoldDuotone';

export { EditSquareBoldDuotone };
export type { EditSquareBoldDuotoneProps };
