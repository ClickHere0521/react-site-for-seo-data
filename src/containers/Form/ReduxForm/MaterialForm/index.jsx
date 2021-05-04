import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import AnimatedLineForm from './components/AnimatedLineForm';
import showResults from '../../Show';

const MaterialForm = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('forms.material_from.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <AnimatedLineForm onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default MaterialForm;
