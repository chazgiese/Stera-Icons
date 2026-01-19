import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SnowflakeFillProps = Omit<IconBaseProps, 'children'>;

const SnowflakeFill = memo(
  forwardRef<SVGSVGElement, SnowflakeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="snowflake-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2.1c-.5 0-.9.4-.9.9v1.44l-.65-.37a.9.9 0 0 0-.9 1.55l1.55.9v2.92L8.57 8.98V7.2a.9.9 0 0 0-1.8 0v.75l-1.25-.72a.9.9 0 1 0-.9 1.56l1.25.72-.65.38a.9.9 0 0 0 .9 1.55l1.55-.89L10.2 12l-2.53 1.46-1.55-.9a.9.9 0 0 0-.9 1.56l.65.38-1.25.72a.9.9 0 1 0 .9 1.56l1.25-.72v.75a.9.9 0 0 0 1.8 0v-1.79l2.53-1.46v2.92l-1.55.9a.9.9 0 0 0 .9 1.55l.65-.37V20a.9.9 0 1 0 1.8 0v-1.44l.65.37a.9.9 0 0 0 .9-1.55l-1.55-.9v-2.92l2.53 1.46v1.79a.9.9 0 0 0 1.8 0v-.75l1.25.72a.9.9 0 0 0 .9-1.56l-1.25-.72.65-.37a.9.9 0 0 0-.9-1.56l-1.55.9L13.8 12l2.53-1.46 1.55.9a.9.9 0 0 0 .9-1.56l-.65-.38 1.25-.72a.9.9 0 0 0-.9-1.56l-1.25.72V7.2a.9.9 0 0 0-1.8 0v1.79l-2.53 1.46V7.52l1.55-.9a.9.9 0 0 0-.9-1.55l-.65.37V4c0-.5-.4-.9-.9-.9" clipRule="evenodd" />
    </IconBase>
  ))
);

SnowflakeFill.displayName = 'SnowflakeFill';

// Triple export pattern (lucide-react style)
export { SnowflakeFill, SnowflakeFill as SnowflakeFillIcon, SnowflakeFill as SiSnowflakeFill };
export type { SnowflakeFillProps };
