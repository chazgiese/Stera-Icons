import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextFieldBoldProps = Omit<IconBaseProps, 'children'>;

const TextFieldBold = memo(
  forwardRef<SVGSVGElement, TextFieldBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.6 3c1 0 1.82.5 2.4 1.21A3.1 3.1 0 0 1 17.4 3h.6a1 1 0 1 1 0 2h-.6c-.28 0-.6.15-.9.54-.29.39-.5.97-.5 1.66v9.6c0 .69.21 1.27.5 1.66.3.4.62.54.9.54h.6a1 1 0 1 1 0 2h-.6c-1 0-1.82-.5-2.4-1.21A3.1 3.1 0 0 1 12.6 21H12a1 1 0 1 1 0-2h.6c.28 0 .6-.15.9-.54.29-.39.5-.97.5-1.66V7.2l-.01-.25a2.7 2.7 0 0 0-.5-1.41c-.29-.4-.61-.54-.89-.54H12a1 1 0 1 1 0-2z" />
        <path fill="currentColor" d="M12 7a1 1 0 1 1 0 2H5.2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v1.6c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H12a1 1 0 1 1 0 2H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 13.6 1 12.8v-1.6q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 6.99 5.2 7zM18.8 7q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v1.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H18a1 1 0 1 1 0-2h.8c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23v-1.6c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C19.75 9 19.38 9 18.8 9H18a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

TextFieldBold.displayName = 'TextFieldBold';

// Triple export pattern (lucide-react style)
export { TextFieldBold, TextFieldBold as TextFieldBoldIcon, TextFieldBold as SiTextFieldBold };
export type { TextFieldBoldProps };
