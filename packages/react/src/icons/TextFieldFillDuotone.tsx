import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextFieldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextFieldFillDuotone = memo(
  forwardRef<SVGSVGElement, TextFieldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 16.75H6q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7-.01-1.03.04-1.7.04-.7.31-1.28.5-.92 1.42-1.42.59-.28 1.28-.31.67-.05 1.7-.04h8zM18 7.25q1.03-.01 1.7.04.7.04 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7.01 1.03-.04 1.7-.04.7-.31 1.28c-.32.6-.81 1.1-1.42 1.42q-.59.28-1.28.31-.67.05-1.7.04h-2v-9.5z" />
        <path fill="currentColor" d="M12.6 3c1 0 1.82.5 2.4 1.21A3.1 3.1 0 0 1 17.4 3h.6a1 1 0 1 1 0 2h-.6c-.28 0-.6.15-.9.54-.29.39-.5.97-.5 1.66v9.6c0 .69.21 1.27.5 1.66.3.4.62.54.9.54h.6a1 1 0 1 1 0 2h-.6c-1 0-1.82-.5-2.4-1.21A3.1 3.1 0 0 1 12.6 21H12a1 1 0 1 1 0-2h.6c.28 0 .6-.15.9-.54.29-.39.5-.97.5-1.66V7.2l-.01-.25a2.7 2.7 0 0 0-.5-1.41c-.29-.4-.61-.54-.89-.54H12a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

TextFieldFillDuotone.displayName = 'TextFieldFillDuotone';

export { TextFieldFillDuotone };
export type { TextFieldFillDuotoneProps };
