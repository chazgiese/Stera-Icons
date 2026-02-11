import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextFieldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextFieldRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextFieldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-field-duotone" {...props}>
      <path d="M12 7.25a.75.75 0 0 1 0 1.5H5.2q-.83 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.6c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H12a.75.75 0 0 1 0 1.5H5.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37v-1.6q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM18.8 7.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v1.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H18a.75.75 0 0 1 0-1.5h.8q.84 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25v-1.6c0-.57 0-.96-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02H18a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path d="M12.6 3.25A2.9 2.9 0 0 1 15 4.63l.1-.14a2.9 2.9 0 0 1 2.3-1.24h.6a.75.75 0 0 1 0 1.5h-.6c-.37 0-.77.2-1.1.64a3 3 0 0 0-.55 1.81v9.6c0 .74.22 1.38.55 1.81s.73.64 1.1.64h.6a.75.75 0 0 1 0 1.5h-.6a2.9 2.9 0 0 1-2.4-1.38l-.1.14a2.9 2.9 0 0 1-2.3 1.24H12a.75.75 0 0 1 0-1.5h.6c.37 0 .77-.2 1.1-.64.33-.43.55-1.07.55-1.81V7.2l-.01-.27a3 3 0 0 0-.54-1.54c-.33-.44-.73-.64-1.1-.64H12a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextFieldRegularDuotone.displayName = 'TextFieldRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextFieldRegularDuotone, TextFieldRegularDuotone as TextFieldRegularDuotoneIcon, TextFieldRegularDuotone as SiTextFieldRegularDuotone };
export default TextFieldRegularDuotone;
export type { TextFieldRegularDuotoneProps };
