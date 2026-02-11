import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullRegularProps = Omit<IconBaseProps, 'children'>;

const FlaskFullRegular = memo(
  forwardRef<SVGSVGElement, FlaskFullRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flask-full" {...props}>
      <path fillRule="evenodd" d="M15 2.25a.75.75 0 0 1 0 1.5h-.25v5.23q0 .82.4 1.56l3.9 7.14c1 1.84-.33 4.07-2.42 4.07H7.37a2.75 2.75 0 0 1-2.41-4.07l3.9-7.14q.38-.74.39-1.56V3.75H9a.75.75 0 0 1 0-1.5zm-1 12.7q-.7.1-1.32.5a4.7 4.7 0 0 1-4.15.51l-.27-.1-.49-.21-1.5 2.75c-.45.83.15 1.85 1.1 1.85h9.26c.95 0 1.55-1.02 1.1-1.85l-1.8-3.3-1.06-.15a3 3 0 0 0-.86 0m-3.25-5.97q0 1.22-.58 2.27l-1.68 3.07.36.16a3.1 3.1 0 0 0 3-.28l.23-.14.1-.06q.63-.35 1.33-.49l.08-.01.1-.02.1-.02.37-.03h.04q.42-.02.83.03l-1.2-2.2a5 5 0 0 1-.58-2.28V3.75h-2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskFullRegular.displayName = 'FlaskFullRegular';

// Triple export pattern (lucide-react style)
export { FlaskFullRegular, FlaskFullRegular as FlaskFullRegularIcon, FlaskFullRegular as SiFlaskFullRegular };
export default FlaskFullRegular;
export type { FlaskFullRegularProps };
