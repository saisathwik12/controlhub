import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';

const ControlHubLandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">ControlHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#modules">Modules</Nav.Link>
              <Nav.Link href="#architecture">Architecture</Nav.Link>
              <Nav.Link href="#security">Security</Nav.Link>
              <Button variant="outline-light" className="ms-2">Try Demo</Button>
              <Button variant="primary" className="ms-2">Sign In</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="hero bg-primary text-white text-center py-5 mt-5">
        <Container className="py-5">
          <h1 className="display-3 fw-bold mb-4">Streamline Your Project Management</h1>
          <p className="lead mb-4 px-4">
            ControlHub is a comprehensive web-based Jira dashboard designed to streamline project management by providing a centralized view of Jira tasks, issues, and analytics.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="light" size="lg">Get Started</Button>
            <Button variant="outline-light" size="lg">Learn More</Button>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <section id="features" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Key Features</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-columns-gap fs-1"></i>
                  </div>
                  <Card.Title>Customizable Dashboards</Card.Title>
                  <Card.Text>
                    Create and save personalized views based on your role and preferences for efficient monitoring.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-graph-up fs-1"></i>
                  </div>
                  <Card.Title>Enhanced Visualization</Card.Title>
                  <Card.Text>
                    Access burndown charts, velocity metrics, and intuitive visual representations of your project data.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon bg-primary text-white rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-lightning-fill fs-1"></i>
                  </div>
                  <Card.Title>Real-time Updates</Card.Title>
                  <Card.Text>
                    Get instant notifications and updates for critical changes across all your projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Audience Section */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Who Benefits</h2>
          <Row className="g-4">
            <Col md={3}>
              <Card className="h-100 border-0 bg-light">
                <Card.Body className="text-center">
                  <div className="audience-icon mb-3">
                    <i className="bi bi-person-workspace fs-1 text-primary"></i>
                  </div>
                  <Card.Title>Project Managers</Card.Title>
                  <Card.Text>
                    Comprehensive oversight of multiple projects from a single dashboard.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 border-0 bg-light">
                <Card.Body className="text-center">
                  <div className="audience-icon mb-3">
                    <i className="bi bi-code-square fs-1 text-primary"></i>
                  </div>
                  <Card.Title>Development Teams</Card.Title>
                  <Card.Text>
                    Track sprint progress and tasks with intuitive visualizations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 border-0 bg-light">
                <Card.Body className="text-center">
                  <div className="audience-icon mb-3">
                    <i className="bi bi-briefcase-fill fs-1 text-primary"></i>
                  </div>
                  <Card.Title>Executives</Card.Title>
                  <Card.Text>
                    High-level project status and performance metrics at a glance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 border-0 bg-light">
                <Card.Body className="text-center">
                  <div className="audience-icon mb-3">
                    <i className="bi bi-people-fill fs-1 text-primary"></i>
                  </div>
                  <Card.Title>Stakeholders</Card.Title>
                  <Card.Text>
                    Clear visibility into project progress and milestones.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Core Modules</h2>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <img src="/api/placeholder/600/400" alt="Dashboard interface" className="img-fluid rounded shadow" />
            </Col>
            <Col lg={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Dashboard Home</Accordion.Header>
                  <Accordion.Body>
                    <p>Provides an overview of all projects and critical metrics including:</p>
                    <ul>
                      <li>Project Cards with quick-view status indicators</li>
                      <li>Real-time activity feed of recent changes</li>
                      <li>Quick filters for instant access to commonly used views</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Project Analytics</Accordion.Header>
                  <Accordion.Body>
                    <p>Offers detailed performance metrics for specific projects, featuring:</p>
                    <ul>
                      <li>Sprint metrics with velocity and completion rate visualizations</li>
                      <li>Burndown charts for daily progress tracking</li>
                      <li>Issue distribution breakdowns by type, status, and priority</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Issue Tracker</Accordion.Header>
                  <Accordion.Body>
                    <p>Enables detailed issue management and tracking with:</p>
                    <ul>
                      <li>Kanban board with drag-and-drop interface</li>
                      <li>Sortable and filterable issue list views</li>
                      <li>Bulk actions for efficient mass updates</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Team Performance</Accordion.Header>
                  <Accordion.Body>
                    <p>Monitor team productivity and workload through:</p>
                    <ul>
                      <li>Visual representation of assigned tasks per team member</li>
                      <li>Issue resolution time and efficiency indicators</li>
                      <li>Capacity planning tools for future sprint resource allocation</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Powerful Architecture</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center mb-3">
                    <i className="bi bi-laptop me-2 text-primary"></i>
                    Frontend
                  </Card.Title>
                  <Card.Text>
                    Built with modern technologies including React.js, Material UI, and D3.js for visualizations.
                    Features responsive design, modular component architecture, Redux state management, and
                    WebSocket integration for real-time updates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center mb-3">
                    <i className="bi bi-server me-2 text-primary"></i>
                    Backend
                  </Card.Title>
                  <Card.Text>
                    Powered by Node.js and Express.js, providing RESTful API endpoints for Jira data integration,
                    background services for automated data synchronization, and a caching layer for optimized
                    performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center mb-3">
                    <i className="bi bi-hdd-network me-2 text-primary"></i>
                    API Integration
                  </Card.Title>
                  <Card.Text>
                    Seamless integration with Jira API for fetching and updating issues, secured with OAuth 2.0
                    authentication, and webhooks for real-time notifications and updates.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center mb-3">
                    <i className="bi bi-database me-2 text-primary"></i>
                    Data Storage
                  </Card.Title>
                  <Card.Text>
                    MongoDB for storing user preferences and dashboard configurations, complemented by Redis
                    for performance optimization and reducing Jira API calls.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Security Section */}
      <section id="security" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Enterprise-Grade Security</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="security-features text-center">
                <div className="security-icon bg-primary text-white rounded-circle mb-4 mx-auto d-flex align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}>
                  <i className="bi bi-shield-lock fs-1"></i>
                </div>
                <p className="lead mb-5">Your data security is our priority. ControlHub implements multiple layers of protection:</p>
              </div>
              <Row className="g-4">
                <Col md={6}>
                  <Card className="border-0 shadow-sm mb-4">
                    <Card.Body className="d-flex">
                      <div className="me-3">
                        <i className="bi bi-person-badge text-primary fs-3"></i>
                      </div>
                      <div>
                        <Card.Title>Role-based Access Control</Card.Title>
                        <Card.Text>Granular permissions based on user roles to ensure proper data access.</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 shadow-sm mb-4">
                    <Card.Body className="d-flex">
                      <div className="me-3">
                        <i className="bi bi-fingerprint text-primary fs-3"></i>
                      </div>
                      <div>
                        <Card.Title>Secure Authentication</Card.Title>
                        <Card.Text>Integration with SSO and multi-factor authentication for enhanced security.</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 shadow-sm mb-4">
                    <Card.Body className="d-flex">
                      <div className="me-3">
                        <i className="bi bi-lock-fill text-primary fs-3"></i>
                      </div>
                      <div>
                        <Card.Title>Data Encryption</Card.Title>
                        <Card.Text>Protection of sensitive project information both in transit and at rest.</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 shadow-sm mb-4">
                    <Card.Body className="d-flex">
                      <div className="me-3">
                        <i className="bi bi-journal-text text-primary fs-3"></i>
                      </div>
                      <div>
                        <Card.Title>Audit Logging</Card.Title>
                        <Card.Text>Comprehensive tracking of user actions for security compliance.</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white text-center py-5">
        <Container>
          <h2 className="mb-4">Ready to Transform Your Project Management?</h2>
          <p className="lead mb-4">Join thousands of teams that have improved their productivity with ControlHub.</p>
          <Button variant="light" size="lg" className="me-3">Get Started Free</Button>
          <Button variant="outline-light" size="lg">Request Demo</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <h5>ControlHub</h5>
              <p className="small">A comprehensive web-based Jira dashboard designed to streamline project management.</p>
            </Col>
            <Col md={2} className="mb-4 mb-md-0">
              <h5>Product</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Features</a></li>
                <li><a href="#" className="text-light text-decoration-none">Pricing</a></li>
                <li><a href="#" className="text-light text-decoration-none">Integrations</a></li>
                <li><a href="#" className="text-light text-decoration-none">Roadmap</a></li>
              </ul>
            </Col>
            <Col md={2} className="mb-4 mb-md-0">
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Documentation</a></li>
                <li><a href="#" className="text-light text-decoration-none">API</a></li>
                <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
                <li><a href="#" className="text-light text-decoration-none">Community</a></li>
              </ul>
            </Col>
            <Col md={2} className="mb-4 mb-md-0">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">About</a></li>
                <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
                <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
                <li><a href="#" className="text-light text-decoration-none">Legal</a></li>
              </ul>
            </Col>
            <Col md={2}>
              <h5>Connect</h5>
              <div className="d-flex gap-2">
                <a href="#" className="text-light"><i className="bi bi-twitter fs-5"></i></a>
                <a href="#" className="text-light"><i className="bi bi-linkedin fs-5"></i></a>
                <a href="#" className="text-light"><i className="bi bi-github fs-5"></i></a>
                <a href="#" className="text-light"><i className="bi bi-youtube fs-5"></i></a>
              </div>
            </Col>
          </Row>
          <hr className="my-4 bg-light" />
          <div className="text-center">
            <p className="small mb-0">© 2025 ControlHub. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default ControlHubLandingPage;
